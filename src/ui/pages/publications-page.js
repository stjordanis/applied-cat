import * as R from "ramda";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PublicationsPage({ publications }) {
  let mkEventLink = (s, i) => (
    <li key={i}>
      <code>{s.id}</code> <Link to={`/publication/${s.citeKey}`}>{s.parsed.title}</Link>{" "}
      {s.author} &nbsp;
    </li>
  );

  return (
    <div>
      <h2>Publications</h2>
      <Link to="/publications/add">
        <button>Add Publication</button>
      </Link>
      <ol>{R.addIndex(R.map)(mkEventLink, publications)}</ol>
    </div>
  );
}
