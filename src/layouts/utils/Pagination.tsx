/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


interface PaginationInterface {
    currentpage: number;
    totalpages: number;
    pagination: any;
}
export const Pagination: React.FC<PaginationInterface> = (props) => {
    const listPagination = [];
    if (props.currentpage === 1) {
        listPagination.push(props.currentpage);
        if (props.totalpages >= props.currentpage + 1) {
            listPagination.push(props.currentpage + 1)
        }
        if (props.totalpages >= props.currentpage + 2) {
            listPagination.push(props.currentpage + 2);
        }
    } else if (props.currentpage > 1) {
        if (props.currentpage >= 3) {
            listPagination.push(props.currentpage - 2);
        }
        if (props.currentpage >= 2) {
            listPagination.push(props.currentpage - 1);
        }
        listPagination.push(props.currentpage)
        if (props.totalpages >= props.currentpage + 1) {
            listPagination.push(props.currentpage + 1);
        }
        if (props.totalpages >= props.currentpage + 2) {
            listPagination.push(props.currentpage + 2);
        }
    }
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item" onClick={()=>props.pagination(1)}>
                    <button className="page-link" >First</button>
                </li>
                {
                    listPagination.map((page) => (
                        <li className="page-item" key={page} onClick={()=>props.pagination(page)}>
                            <button className={"page-link" +(props.currentpage === page?"active":"") } >
                                {page}
                            </button>
                        </li>
                    ))
                }
                <li className="page-item" onClick={ () => props.pagination(props.totalpages)}>
                </li>
                <button className="page-link" >Last</button>

            </ul>
        </nav >
    );
}