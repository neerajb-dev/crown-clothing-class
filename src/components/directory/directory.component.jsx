import "./directory.styles.scss";
import React, { Component } from "react";
import CategoryItem from "../category-item/category-item.component";

export default class Directory extends Component {
    render() {
        const { categories } = this.props;
        return (
            <div className="directory-container">
                {
                    categories.map((category) => {
                        return (
                            <CategoryItem key={category.id} category={category} />
                        )
                    })
                }
            </div>
        )
    }
}
