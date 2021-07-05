import React from 'react';

function MainContent() {
    return (
        <div>
            <main>
                <div className="main-head">
                    <form className="search-box">
                        <input type="search" placeholder="Search for an anime" required/>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default MainContent;