import { ResponsiveImage } from "@components";
import clsx from "clsx";

export const FeaturesSection = () => {
    return (
        <section id="features" className="section">
            <div className="container">
                <h2 className="mb-[50px] subheading tb:mb-[40px] sm:mb-[30px]">
                    <span className="text-t-orange">[2]</span> killa features
                </h2>
                <div className="grid grid-cols-3 gap-[10px] tb:flex tb:flex-col">
                    <div
                        className={clsx(
                            "group py-[24px] px-[27px] pb-0 row-span-2 border-[3px] border-gray flex flex-col overflow-hidden",
                            "tb:pr-0 tb:pb-[45px] tb:flex-row tb:items-end tb:justify-between tb:gap-[32px]",
                            "sm:pt-[20px] sm:px-[17px] sm:min-h-[281px] sm:flex-col sm:items-stretch sm:gap-0"
                        )}
                    >
                        <div className="mb-auto">
                            <h3 className="mb-[14px] text-t-orange h3 xl:mb-[10px] sm:mb-[8px]">Instant settlement</h3>
                            <p className="relative z-[1] max-w-[394px] xl:max-w-[291px] xs:max-w-[208px]">
                                Experience near-instant transactions to&nbsp;keep your cash flow uninterrupted
                            </p>
                        </div>
                        <ResponsiveImage
                            className={clsx(
                                "mr-[-30px] mb-[-0.8%] ml-[-13px]",
                                "xl:mr-[-30px] xl:ml-[-43px] xl:mb-[9px] xl:w-[128%]",
                                "tb:flex-none tb:ml-0 tb:mr-[-1.6%]  tb:mt-[-6.8%] tb:mb-[-11%] tb:w-[38%]",
                                "sm:mt-[1.4%] sm:mr-[-22%] sm:mb-[-38.7%] sm:ml-auto sm:w-[93%]",
                                "group-hover:scale-[1.05] transition-all duration-300"
                            )}
                            src="homepage/features/01.png"
                            alt="QR"
                            aspectRatio={275 / 227}
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 60vw"
                        />
                    </div>
                    <div
                        className={clsx(
                            "group py-[24px] px-[27px] pb-0 border-[3px] border-gray flex flex-col overflow-hidden",
                            "tb:pr-0 tb:pb-[45px] tb:flex-row tb:items-end tb:justify-between tb:gap-[32px]",
                            "sm:pt-[20px] sm:px-[17px] sm:min-h-[281px] sm:flex-col sm:items-stretch sm:gap-0"
                        )}
                    >
                        <div className="mb-auto">
                            <h3 className="mb-[11px] text-t-orange h3 sm:mb-[8px]">Advanced security</h3>
                            <p className="relative z-[1] max-w-[471px] mb-auto xl:max-w-[351px] xs:max-w-[208px]">
                                Protect your assets with multi-layer encryption and industry-leading security protocols
                            </p>
                        </div>
                        <ResponsiveImage
                            className={clsx(
                                "mt-[-7.3%] mr-[-35px] ml-auto mb-[-4.3%] w-[57.7%]",
                                "xl:w-[67%] xl:mt-[-8.5%] xl:mr-[-27px] xl:mb-[-4%]",
                                "tb:flex-none tb:mt-[-3%] tb:mr-[1.5%] tb:mb-[-8.3%] tb:w-[31%]",
                                "sm:mt-[4.7%] sm:mr-[-7.7%] sm:mb-[-19.6%] sm:rotate-[-11deg] sm:w-[67.1%]",
                                "group-hover:scale-[1.05] transition-all duration-300"
                            )}
                            src="homepage/features/02.png"
                            alt="Paw"
                            aspectRatio={293 / 236}
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 60vw"
                        />
                    </div>
                    <div
                        className={clsx(
                            "group py-[24px] px-[27px] pb-0 border-[3px] border-gray flex flex-col overflow-hidden",
                            "tb:pr-0 tb:pb-[45px] tb:flex-row tb:items-end tb:justify-between tb:gap-[32px]",
                            "sm:pt-[19px] sm:px-[17px] sm:min-h-[281px] sm:flex-col sm:items-stretch sm:gap-0"
                        )}
                    >
                        <div className="mb-auto">
                            <h3 className="mb-[12px] text-t-orange h3 xl:mb-[11px] sm:mb-[7px]">Global reach</h3>
                            <p className="relative z-[1] max-w-[470px] mb-auto xl:max-w-[350px] xs:max-w-[208px]">
                                Accept payments in&nbsp;multiple cryptocurriences and access customers worldwide
                            </p>
                        </div>
                        <ResponsiveImage
                            className={clsx(
                                "mt-[-6px] mx-[8px] mb-[-12.7%]",
                                "xl:mt-[-3%] xl:mx-[-6px] xl:mb-[-7%]",
                                "tb:mt-[-5.3%] tb:mr-[-7%] tb:mb-[-6.6%] tb:w-[51%]",
                                "sm:mt-0 sm:mb-[-45px] sm:self-center sm:w-[80%]",
                                "xs:mt-[-0.6%] xs:ml-[-12%] xs:mr-[-15.4%] xs:mb-[-23.2%] xs:w-[auto] xs:self-auto",
                                "group-hover:scale-[1.05] transition-all duration-300"
                            )}
                            src="homepage/features/03.png"
                            alt="Map"
                            aspectRatio={2 / 1}
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 60vw"
                        />
                    </div>
                    <div
                        className={clsx(
                            "group py-[23px] px-[27px] col-span-2 pb-0 border-[3px] border-gray flex flex-col overflow-hidden xl:pt-[25px]",
                            "tb:pt-[24px] tb:pr-0 tb:pb-[45px] tb:flex-row tb:items-end tb:justify-between tb:gap-[32px]",
                            "sm:pt-[20px] sm:px-[17px] sm:min-h-[281px] sm:flex-col sm:items-stretch sm:gap-0"
                        )}
                    >
                        <div className="mb-auto">
                            <h3 className="mb-[11px] text-t-orange h3 sm:mb-[7px]">Ultra-low fees</h3>
                            <p className="relative z-[1] max-w-[460px] mb-auto xl:max-w-[320px] xs:max-w-[208px]">
                                Save on&nbsp;processing costs with competitive fee structures and&nbsp;no&nbsp;hidden charges
                            </p>
                        </div>
                        <ResponsiveImage
                            className={clsx(
                                "mt-[-12.8%] mr-[-30px] ml-auto w-[72.4%]",
                                "xl:mt-[-15.1%] xl:mr-[-54px] xl:mb-[-0.1%] xl:w-[83%]",
                                "tb:mt-[-3.9%] tb:mr-[-0.7%] tb:mb-[-6.7%] tb:ml-[-29%] tb:w-[58.5%]",
                                "sm:hidden",
                                "group-hover:scale-[1.05] group-hover:translate-y-[-2%] transition-all duration-300"
                            )}
                            src="homepage/features/04.png"
                            alt="Low fees"
                            aspectRatio={196 / 81}
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 60vw"
                        />
                        <ResponsiveImage
                            className={clsx("hidden mt-[11px] w-[90%] mb-[-12%] self-center xs:mx-[-21px] xs:mb-[-48px] xs:w-[calc(100%+42px)]", "sm:block")}
                            src="homepage/features/04-mobile.png"
                            alt="Low fees"
                            aspectRatio={160 / 73}
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 60vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
