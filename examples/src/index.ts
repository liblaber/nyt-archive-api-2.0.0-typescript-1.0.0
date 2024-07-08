// This file was generated by liblab | https://liblab.com/

import { NYTimes Archive } from 'nyt-article-search';

(async () => {
  const NYTimes Archive = new NYTimes Archive({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await NYTimes Archive.archive.getByYearMonthJson(2018, 9);

  console.log(data);
})();