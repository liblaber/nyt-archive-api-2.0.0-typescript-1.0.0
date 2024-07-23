# NytArchives TypeScript SDK 1.0.0

Welcome to the NytArchives SDK documentation. This guide will help you get started with integrating and using the NytArchives SDK in your project.

## Versions

- API version: `2.0.0`
- SDK version: `1.0.0`

## Table of Contents

- [Setup & Configuration](#setup--configuration)
  - [Supported Language Versions](#supported-language-versions)
  - [Installation](#installation)
- [Services](#services)
- [Models](#models)
- [License](#license)

# Setup & Configuration

## Supported Language Versions

This SDK is compatible with the following versions: `TypeScript >= 4.8.4`

## Installation

To get started with the SDK, we recommend installing using `npm`:

```bash
npm install nyt-archives
```

## Services

The SDK provides various services to interact with the API.

<details> 
<summary>Below is a list of all available services with links to their detailed documentation:</summary>

| Name                                                       |
| :--------------------------------------------------------- |
| [ArchiveService](documentation/services/ArchiveService.md) |

</details>

## Models

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details> 
<summary>Below is a list of all available models with links to their detailed documentation:</summary>

| Name                                                                                 | Description |
| :----------------------------------------------------------------------------------- | :---------- |
| [GetByYearMonthJsonOkResponse](documentation/models/GetByYearMonthJsonOkResponse.md) |             |
| [Response](documentation/models/Response.md)                                         |             |
| [Meta](documentation/models/Meta.md)                                                 |             |
| [Article](documentation/models/Article.md)                                           |             |
| [Multimedia](documentation/models/Multimedia.md)                                     |             |
| [Headline](documentation/models/Headline.md)                                         |             |
| [Keyword](documentation/models/Keyword.md)                                           |             |
| [Byline](documentation/models/Byline.md)                                             |             |
| [Legacy](documentation/models/Legacy.md)                                             |             |
| [Person](documentation/models/Person.md)                                             |             |

</details>

## License

This SDK is licensed under the MIT License.

See the [LICENSE](LICENSE) file for more details.
