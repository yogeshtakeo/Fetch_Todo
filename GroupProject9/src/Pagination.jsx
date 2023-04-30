import React, { Component } from "react";
import { Pagination } from "flowbite-react";

function Page() {
  const onPageChange = () => {};
  return (
    <Pagination currentPage={1} totalPages={100} onPageChange={onPageChange} />
  );
}

export default Page;
