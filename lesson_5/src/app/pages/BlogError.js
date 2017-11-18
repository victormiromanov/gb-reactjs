import React, { Component } from 'react';

import PageTitle from '../components/PageTitle';
import BlogContent from '../components/BlogContent';
import Sidebar from '../components/Sidebar';
import BlogItem from '../components/BlogItem';
import Pagination from '../components/Pagination';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <PageTitle title={'Блог'} description={'Наши последние новости'}/>
                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <BlogContent>
                                <BlogItem/>
                                <Pagination/>
                            </BlogContent>
                            <Sidebar title={'Tag cloud'}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}