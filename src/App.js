import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRotes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { Fragment } from 'react';

function App() {
    useEffect(() => {
        const isMac = navigator.userAgent.includes('Mac OS');
        if (!isMac) {
            document.documentElement.classList.add('windows-scroll');
        }
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRotes.map((rote, index) => {
                        let Layout = DefaultLayout;
                        const Page = rote.component;
                        if (rote.layout) {
                            Layout = rote.layout;
                        } else if (rote.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={rote.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
