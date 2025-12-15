import React from 'react'
import './breadcrumb.css'

export const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? item.label : <a href={item.href || "#"}>{item.label}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};