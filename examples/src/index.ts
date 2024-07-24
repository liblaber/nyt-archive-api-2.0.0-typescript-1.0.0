// This file was generated by liblab | https://liblab.com/

import { NytArchives } from "nyt-archives";

(async () => {
  const nytArchives = new NytArchives({
    apiKey: "your-api-key",
  });

  const { data } = await nytArchives.archive.getByYearMonthJson(2018, 9);

  console.log(data);
})();
