-- CREATE OR REPLACE STREAM "INTER_STREAM" (
--     "ENGINE_COOLANT_TEMP" DOUBLE,
--     "ENGINE_OIL_PRESS" DOUBLE,
--     "ENGINE_SPEED" DOUBLE,
--     "FUEL_DELIVERY_PRESSURES" INTEGER,
--     "FUEL_LEVEL" DOUBLE,
--     "FUEL_RATE" DOUBLE);
    
CREATE OR REPLACE STREAM "INTER_STREAM" (
    "ch_1" DOUBLE,
    "ch_10" DOUBLE);

CREATE OR REPLACE PUMP "INTER_PUMP" AS 
   INSERT INTO "INTER_STREAM"
      SELECT STREAM "ch_1", "ch_10" FROM "SOURCE_SQL_STREAM_001";

CREATE OR REPLACE STREAM "ch_1_STREAM" (
    "ch_1" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_2" AS 
   INSERT INTO "ch_1_STREAM"
      SELECT STREAM "ch_1", ANOMALY_SCORE
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_1" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "ch_10_STREAM" (
    "ch_10" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_3" AS 
   INSERT INTO "ch_10_STREAM"
      SELECT STREAM "ch_10", ANOMALY_SCORE
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_10" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "MACHINE_STREAM" (
    "ch_1" DOUBLE,
    "ch_10" DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP" AS 
   INSERT INTO "MACHINE_STREAM"
      SELECT STREAM "ch_1", "ch_10", ANOMALY_SCORE 
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_1", "ch_10" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "COMBINED_ENGINE_STREAM" (
    "ch_1" DOUBLE,
    "ch_10" DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_COMBINED" AS 
   INSERT INTO "COMBINED_MACHINE_STREAM"
      SELECT STREAM "MACHINE_STREAM"."ch_1", "MACHINE_STREAM"."ch_10", "MACHINE_STREAM".ANOMALY_SCORE, "ch_1_STREAM".ANOMALY_SCORE AS "ch_1_ANOMALY_SCORE", "ch_10_STREAM".ANOMALY_SCORE AS "ch_10_ANOMALY_SCORE"
      FROM "MACHINE_STREAM"
      INNER JOIN "ch_1_STREAM" ON "MACHINE_STREAM"."ch_1" = "ch_1_STREAM"."ch_1"
      INNER JOIN "ch_10_STREAM" ON "MACHINE_STREAM"."ch_10" = "ch_10_STREAM"."ch_10";