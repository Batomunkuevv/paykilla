import { LayoutProps } from "@t";

import { Preloader, Footer } from "@components";

export const MainLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Preloader />
            <div className="site-wrapper">
                <main className="site-page">{children}</main>
                <Footer />
            </div>
        </>
    );
};
