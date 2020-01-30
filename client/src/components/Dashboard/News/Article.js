import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

export default function Article(props) {
  let {
    title,
    url,
    imageurl,
    source,
    published_on,
    categories,
    body
  } = props.article;

  return (
    <div style={{ marginBottom: "15px", maxWidth: "350px" }}>
      <div>
        <img src={imageurl} style={{ width: "100%" }} />
        <Toast style={{ width: "100%" }}>
          <ToastHeader>
            <a href={url}>
              <strong>{title}</strong>
            </a>
          </ToastHeader>
          <ToastBody>
            {body}
            <br />
            {categories} | Author: <a href={url}>{source}</a>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
}
