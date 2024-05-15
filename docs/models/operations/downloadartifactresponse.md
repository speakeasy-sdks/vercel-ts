# DownloadArtifactResponse


## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `stream`                                                                                 | *ReadableStream<Uint8Array>*                                                             | :heavy_minus_sign:                                                                       | The artifact was found and is downloaded as a stream. Content-Length should be verified. |