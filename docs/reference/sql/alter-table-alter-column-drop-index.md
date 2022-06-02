---
title: ALTER TABLE COLUMN DROP INDEX
sidebar_label: DROP INDEX
description: DROP INDEX SQL keyword reference documentation.
---

Removes and existing index from a column of type `symbol`.

Removing an index is an atomic, non-blocking and non-waiting operation. Once
complete, the SQL optimizer will stop using the index for SQL executions and 
all its associated files are deleted.

:::info

For more information about indexes please refer to the
[INDEX documentation](/docs/concept/indexes)

:::

## Syntax

![Flow chart showing the syntax of the ALTER TABLE keyword](/img/docs/diagrams/alterTable.svg)
![Flow chart showing the syntax of the ALTER TABLE with DROP INDEX keyword](/img/docs/diagrams/alterTableDropIndex.svg)

## Example

```questdb-sql title="Removing an index"
ALTER TABLE trades ALTER COLUMN instrument DROP INDEX;
```
