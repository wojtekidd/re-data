---
sidebar_position: 1
---

# What is re_data?

re_data is an open-source data quality & observability framework for modern data stack. 😊

Currently, re_data focuses on observing the dbt project (together with underlaying data warehouse - Postgres, BigQuery, Snowflake, Redshift).

# Live demo

![GraphExample](/screenshots/ui/graph.png)

Check out our **[live demo](https://re-data.github.io/re-data/ui-feature-react-app/#/alerts)** of what you can get out of re_data.

# Features

## Metrics
Monitor predefined and custom metrics about your data. All metrics are stored in your database and accessible for you. re_data custom metrics can be standard dbt macros which make it very easy to add them to your project.

## Alerts
Get information about suspicious data patterns automatically without writing tests. re_data detects trends in your data and create alerts if something seems suspicious.

## Macros
re_data ships with a set of macros to save you time and some pain of writing code for cleaning / normalizing / validating your data. Use them to make your project cleaner 😊. You can also use them as a base for your own metrics or data tests.

## Lineage

re_data shows data lineage for you data warehouse. (This is imported from dbt graph). You can navigate your data & investigate alerts & metrics related to each node in the graph.

# Installation

re_data is very easy to add to existing dbt projects. Check out **[installation](/docs/getting_started/installation/for_dbt_users)** tutorial.

If you are not using dbt, re_data can still be a great option to start monitoring your existing tables. Check out installation for users: **[new to dbt](/docs/getting_started/installation/new_to_dbt)** in this case.

Have more questions? Check out the rest of re_data docs, or ask as on **[Slack! 😊](https://join.slack.com/t/re-data/shared_invite/zt-vkauq1y8-tL4R4_H5nZoVvyXyy0hdug)** (we are very responsive there)
