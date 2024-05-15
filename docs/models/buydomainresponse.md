# BuyDomainResponse


## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [models.HTTPMetadata](../models/httpmetadata.md)                                 | :heavy_check_mark:                                                               | N/A                                                                              |
| `twoHundredAndOneApplicationJsonObject`                                          | [models.BuyDomainResponseBody](../models/buydomainresponsebody.md)               | :heavy_minus_sign:                                                               | Successful response for purchasing a Domain.                                     |
| `twoHundredAndTwoApplicationJsonObject`                                          | [models.BuyDomainDomainsResponseBody](../models/buydomaindomainsresponsebody.md) | :heavy_minus_sign:                                                               | Domain purchase is being processed asynchronously.                               |