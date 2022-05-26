import React from "react";

import "./Table.scss";

export const Table = ({ children }) => {
  return (
    <div>
      <table>{children}</table>
    </div>
  );
};

export const TableHead = () => {
  return (
    <thead>
      <tr>Hello</tr>
    </thead>
  );
};

export const TableBody = () => {
  return <tbody></tbody>;
};
