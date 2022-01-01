import {render, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import HomePage from './homepage.component'

import '@testing-library/jest-dom'

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe('expect to render Homepage component', () => {
    it('expect to show / route', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <HomePage />
            </Router>,
        );

        expect(screen.getByText(/TODO Items/i)).toBeInTheDocument();
    });

    it('expect to show /done route', () => {
        const history = createMemoryHistory();
        history.push('done');
        render(
            <Router history={history}>
                <HomePage />
            </Router>,
        );

        expect(screen.getByText(/DONE Items/i)).toBeInTheDocument();
    });

    it('expect to show /todo route', () => {
        const history = createMemoryHistory();
        history.push('todo');
        render(
            <Router history={history}>
                <HomePage />
            </Router>,
        );

        expect(screen.getByText(/TODO Items/i)).toBeInTheDocument();
    });
})