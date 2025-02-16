import React from 'react'
import Login from '../components/Login'
import styled from "@emotion/styled"

const Cover = styled.section`
    background-image: ${() => `url(${require('../assets/image/kat.webp')})`};
    background-size: cover;
    background-position: top;
    background-color:#e9e4e0;
    position: relative;
    overflow: hidden;

    @media only screen and (max-width: 768px) {
        background-image: unset !important;
        background-color:#e9e4e0 !important;
      }
`

const CoverWrap = styled.div`
    width: 100%;
    min-height: 100vh;

    main {
        padding-top:5rem;
    }
`

const login: React.FC<any> = ({}) => {
    return (
        <>
            <Cover>
                <CoverWrap>
                    <div className="pt-32 lg:px-8 lg:pt-16 xl:pt-32">
                        <h1 className="text-4xl px-10 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Cat Space</span>
                        </h1>
                        <div className="lg:w-2/6 md:w-full">
                            <Login/>
                        </div>
                    </div>
                </CoverWrap>
            </Cover>
            </>
        );
}

export default login