import React, { useState, useEffect, Fragment } from "react";
import { Pagination } from "components";
import { getAllPosts } from "service/Api";
import { toast } from "utils";
import { Accordain } from "components";

import "./Pagination.scss";
import { useRouter } from "hooks";

const PaginationPage = () => {
  const router = useRouter();

  const { page } = router.query;

  let [posts, setPosts] = useState([]);

  let [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getFaq();
  }, [page]);

  const getFaq = async () => {
    let params = {
      page: page,
      limit: 10,
    };
    try {
      let {
        data: { posts: data, total, limit },
      } = await getAllPosts({ params });
      setPosts(data);
      setTotalPages(Math.ceil(total / limit));
    } catch (error) {
      toast({ type: "error", message: error.message });
    }
  };

  const handlePageClick = (event) => {
    router.push({ search: `?page=${event}` });
  };

  if (posts.length === 0) return null;

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6">
          {posts.map(({ title, body }, index) => {
            return <Accordain key={index} title={title} content={body} />;
          })}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="d-flex justify-content-start py-4">
          <Pagination
            activePage={parseInt(page ?? 1)}
            totalPages={totalPages}
            onPageChange={handlePageClick}
          />
        </div>
      )}
    </Fragment>
  );
};

export default PaginationPage;
