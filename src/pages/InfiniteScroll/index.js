import React, { useEffect, useLayoutEffect, useState } from "react";
import { getAllPosts } from "service/Api";
import { toast } from "utils";
import { Accordain, InfiniteScroll } from "components";

const InfiniteScrollPage = () => {
  let [posts, setFaq] = useState([]);

  let [page, setPage] = useState(1);

  let [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getFaq();
  }, [page]);

  const getFaq = async () => {
    let params = {
      skip: page,
      limit: 15,
    };
    try {
      let {
        data: { posts: data, total, limit },
      } = await getAllPosts({ params });
      setFaq([...posts, ...data]);
      setTotalPages(Math.ceil(total / limit));
    } catch (error) {
      toast({ type: "error", message: error.data.message });
    }
  };

  const handlePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <InfiniteScroll onLoadMore={handlePage} hasNextPage={page < totalPages}>
          {posts.map(({ title, body }, index) => {
            return <Accordain key={index} title={title} content={body} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default InfiniteScrollPage;
