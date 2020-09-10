import React, { FC, memo } from 'react';
import PageLayout from "@/layouts/PageLayout"

export interface IHomePage {
    
}

const HomePage: FC<IHomePage> = () => {
    return (
        <PageLayout title={"Home page"}>
            Content
        </PageLayout>
    )
}

export default memo(HomePage)