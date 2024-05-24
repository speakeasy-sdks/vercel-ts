# Entities

A list of "entities" within the event `text`. Useful for enhancing the displayed text with additional styling and links.


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `type`                                                                | [components.Type](../../models/components/type.md)                    | :heavy_check_mark:                                                    | The type of entity.                                                   | author                                                                |
| `start`                                                               | *number*                                                              | :heavy_check_mark:                                                    | The index of where the entity begins within the `text` (inclusive).   | 0                                                                     |
| `end`                                                                 | *number*                                                              | :heavy_check_mark:                                                    | The index of where the entity ends within the `text` (non-inclusive). | 3                                                                     |