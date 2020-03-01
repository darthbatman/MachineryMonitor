CREATE OR REPLACE STREAM "INTER_STREAM" (
    "ch_68" DOUBLE,
    "ch_49" DOUBLE,
    "ch_59" DOUBLE,
    "ch_13" DOUBLE,
    "ch_40" DOUBLE,
    "ch_74" DOUBLE);
    
CREATE OR REPLACE PUMP "INTER_PUMP" AS 
   INSERT INTO "INTER_STREAM"
      SELECT STREAM "ch_68", "ch_49", "ch_59", "ch_13", "ch_40","ch_74" FROM "SOURCE_SQL_STREAM_001";

CREATE OR REPLACE STREAM "ch_68_STREAM" (
    "ch_68" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_2" AS 
   INSERT INTO "ch_68_STREAM"
      SELECT STREAM "ch_68", ANOMALY_SCORE
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_68" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "ch_49_STREAM" (
    "ch_49" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_3" AS 
   INSERT INTO "ch_49_STREAM"
      SELECT STREAM "ch_49", ANOMALY_SCORE
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_49" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "ch_59_STREAM" (
    "ch_59" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_4" AS 
   INSERT INTO "ch_59_STREAM"
      SELECT STREAM "ch_59", ANOMALY_SCORE
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_59" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "ch_13_STREAM" (
    "ch_13" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_5" AS 
   INSERT INTO "ch_13_STREAM"
      SELECT STREAM "ch_13", ANOMALY_SCORE
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_13" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "ch_40_STREAM" (
    "ch_40" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_6" AS 
   INSERT INTO "ch_40_STREAM"
      SELECT STREAM "ch_40", ANOMALY_SCORE
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_40" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "ch_74_STREAM" (
    "ch_74" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_7" AS 
   INSERT INTO "ch_74_STREAM"
      SELECT STREAM "ch_74", ANOMALY_SCORE
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_74" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "MACHINE_STREAM" (
    "ch_68" DOUBLE,
    "ch_49" DOUBLE,
    "ch_59" DOUBLE,
    "ch_13" DOUBLE,
    "ch_40" DOUBLE,
    "ch_74" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP" AS 
   INSERT INTO "MACHINE_STREAM"
      SELECT STREAM "ch_68", "ch_49", "ch_59", "ch_13", "ch_40","ch_74", ANOMALY_SCORE 
      FROM TABLE(RANDOM_CUT_FOREST(
              CURSOR(SELECT STREAM "ch_68", "ch_49", "ch_59", "ch_13", "ch_40","ch_74" FROM "INTER_STREAM")));

CREATE OR REPLACE STREAM "COMBINED_MACHINE_STREAM" (
    "ch_68" DOUBLE,
    "ch_49" DOUBLE,
    "ch_59" DOUBLE,
    "ch_13" DOUBLE,
    "ch_40" DOUBLE,
    "ch_74" DOUBLE,
    "ANOMALY_SCORE"  DOUBLE,
    "ch_68_ANOMALY_SCORE"  DOUBLE,
    "ch_49_ANOMALY_SCORE"  DOUBLE,
    "ch_59_ANOMALY_SCORE"  DOUBLE,
    "ch_13_ANOMALY_SCORE"  DOUBLE,
    "ch_40_ANOMALY_SCORE"  DOUBLE,
    "ch_74_ANOMALY_SCORE"  DOUBLE);

CREATE OR REPLACE PUMP "STREAM_PUMP_COMBINED" AS 
   INSERT INTO "COMBINED_MACHINE_STREAM"
      SELECT STREAM "MACHINE_STREAM"."ch_68", "MACHINE_STREAM"."ch_49", "MACHINE_STREAM"."ch_59", "MACHINE_STREAM"."ch_13", "MACHINE_STREAM"."ch_40", "MACHINE_STREAM"."ch_74", "MACHINE_STREAM".ANOMALY_SCORE, "ch_68_STREAM".ANOMALY_SCORE AS "ch_68_ANOMALY_SCORE", "ch_49_STREAM".ANOMALY_SCORE AS "ch_49_ANOMALY_SCORE", "ch_59_STREAM".ANOMALY_SCORE AS "ch_59_ANOMALY_SCORE", "ch_13_STREAM".ANOMALY_SCORE AS "ch_13_ANOMALY_SCORE", "ch_40_STREAM".ANOMALY_SCORE AS "ch_40_ANOMALY_SCORE", "ch_74_STREAM".ANOMALY_SCORE AS "ch_74_ANOMALY_SCORE"
      FROM "MACHINE_STREAM"
      INNER JOIN "ch_68_STREAM" ON "MACHINE_STREAM"."ch_68" = "ch_68_STREAM"."ch_68"
      INNER JOIN "ch_49_STREAM" ON "MACHINE_STREAM"."ch_49" = "ch_49_STREAM"."ch_49"
      INNER JOIN "ch_59_STREAM" ON "MACHINE_STREAM"."ch_59" = "ch_59_STREAM"."ch_59"
      INNER JOIN "ch_13_STREAM" ON "MACHINE_STREAM"."ch_13" = "ch_13_STREAM"."ch_13"
      INNER JOIN "ch_40_STREAM" ON "MACHINE_STREAM"."ch_40" = "ch_40_STREAM"."ch_40"
      INNER JOIN "ch_74_STREAM" ON "MACHINE_STREAM"."ch_74" = "ch_74_STREAM"."ch_74";