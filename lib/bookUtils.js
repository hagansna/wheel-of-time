export default function doBookAggregation(books) {
  let { totalPageCount, totalChapterCount, totalWordCount } =
    doPageCount(books);
  return books.map((book) => {
    let pagePercent = (book.page_count / totalPageCount) * 100;
    let chapterPercent = (book.chapter_count / totalChapterCount) * 100;
    let wordPercent = (book.word_count / totalWordCount) * 100;
    return { ...book, pagePercent, chapterPercent, wordPercent };
  });
}

function doPageCount(books) {
  return books.reduce(
    (prev, curr) => {
      let pageCount = prev.totalPageCount + curr.page_count;
      let chapterCount = prev.totalChapterCount + curr.chapter_count;
      let wordCount = prev.totalWordCount + curr.word_count;
      return {
        totalPageCount: pageCount,
        totalChapterCount: chapterCount,
        totalWordCount: wordCount,
      };
    },
    { totalPageCount: 0, totalChapterCount: 0, totalWordCount: 0 }
  );
}
