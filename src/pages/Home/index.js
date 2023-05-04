import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import GetStart from '../../components/GetStart';
import CarouselComp from '../../components/Carousel';
import imgFlex from '../../assets/images/imgFlex';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Home() {
    console.log(imgFlex);

    return (
        <div className={cx('wrapper')}>
            <GetStart
                title={'Design your own beautiful brand'}
                desc={"Use Looka's AI-powered platform to design a logo and build a brand you love."}
            />
            <CarouselComp />
            <div className="hidden brand bg-[#f4f6f8] p-[40px] w-full md:block">
                <div className="flex justify-around items-center w-full px-[16px]">
                    {imgFlex.map((img) => (
                        <img className="max-w-[135px] flex items-center mx-[8px]" alt="" src={img.src} key={img.id} />
                    ))}
                </div>
            </div>
            <div className="layout mt-[160px]">
                <div className="layout-headline text-center mx-auto font-bold mb-[72px] leading-[52px] text-[var(--text-color)] max-w-[670px] text-[40px] ">
                    The easiest way to design and launch your new business
                </div>
                <div className="flex gap-[160px] flex-col">
                    <div className="wrapper items-center flex flex-col md:flex-row mx-auto px-[32px] gap-20">
                        <div className="layout-img w-full md:w-[57%]">
                            <img
                                src="https://cdn.logojoy.com/wp-content/uploads/20210211103713/Kardia-Brand-Logo-Creation-Compressed.jpg"
                                alt=""
                                className=""
                            />
                        </div>
                        <div className="layout-text w-[462px]">
                            <div className="step font-bold text-[30px] leading-[38px]">
                                <span className="number text-[#5340ff]">01.</span> Make a logo in minutes
                            </div>
                            <div className="layout-desc my-[24px] text-[#676e8b] font-medium text-[16px]">
                                Forget looking generic! Looka’s software is powered by AI to create a logo that matches
                                your vision — no design skills required. Generate endless options, and tweak designs to
                                get exactly what you want.
                            </div>
                            <Button primary small className={'text-[1.4rem]'}>
                                Get started
                            </Button>
                        </div>
                    </div>
                    <div className="wrapper items-center flex flex-col md:flex-row mx-auto px-[32px] gap-20">
                        <div className="layout-img w-full md:w-[57%] md:order-2">
                            <img
                                src="https://cdn.logojoy.com/wp-content/uploads/20210211103731/Kardia-Brand-Business-Cards-Compressed.jpg"
                                alt=""
                                className=""
                            />
                        </div>
                        <div className="layout-text w-[462px]">
                            <div className="step font-bold text-[30px] leading-[38px]">
                                <span className="number text-[#5340ff]">02.</span> Bring your brand to life
                            </div>
                            <div className="layout-desc my-[24px] text-[#676e8b] font-medium text-[16px]">
                                With your logo design finalized, it’s time to start building your brand identity.
                                Looka’s Brand Kit uses your logo, colors, and fonts to instantly create hundreds of
                                branded marketing materials—all in one spot.
                            </div>
                            <Button primary small className={'text-[1.4rem]'}>
                                Get started
                            </Button>
                        </div>
                    </div>
                    <div className="wrapper items-center flex flex-col md:flex-row mx-auto px-[32px] gap-20">
                        <div className="layout-img w-full md:w-[57%]">
                            <img
                                src="https://cdn.logojoy.com/wp-content/uploads/20210211103812/Kardia-Brand-Website-Compressed.jpg"
                                alt=""
                                className=""
                            />
                        </div>
                        <div className="layout-text w-[462px]">
                            <div className="step font-bold text-[30px] leading-[38px]">
                                <span className="number text-[#5340ff]">03.</span> Market your business
                            </div>
                            <div className="layout-desc my-[24px] text-[#676e8b] font-medium text-[16px]">
                                Choose from 300+ templates made to match your brand identity and industry. Customize the
                                design of your brand’s business cards, social profiles, email signatures, and more in
                                the Brand Kit’s easy-to-use editor.
                            </div>
                            <Button primary small className={'text-[1.4rem]'}>
                                Get started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <GetStart
                className={'bg-[#f4f6f8] mt-[160px]'}
                classNameInput={true}
                fontText={true}
                title={"Make a logo you'll be proud of"}
                // desc={"Use Looka's AI-powered platform to design a logo and build a brand you love."}
            />
            <div className="md:my-[16rem] my-[8.8rem]">
                <div className="text-[var(--text-color)] text-[3rem] md:text-[4rem] leading-[50px] font-bold text-center">
                    Looka is your personal designer
                </div>
                <div className="text-[#676e8b] text-[1.6rem] px-[2.4rem] max-w-[83.2rem] text-center mx-auto mt-[1.6rem]">
                    Looka gives you everything you need to launch your brand and look great from day one. The best part?
                    Artificial intelligence does the heavy graphic design lifting, you have the creative control.
                </div>
            </div>
            <div className="flex w-full flex-col gap-[4rem]">
                <div className="col w-full flex flex-wrap items-center justify-between gap-[1.6rem] px-[3.2rem]">
                    <div className="warpper-item max-w-[35.8rem]">
                        <div className="item ">
                            <div className="w-[7.2rem] h-[7.2rem]">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162409/ic_shirt.svg"
                                    alt=""
                                />
                            </div>
                            <div className="title text-[1.8rem] mt-[3rem] font-bold leading-[2.3rem] my-[2.4rem]">
                                1. Logo designs
                            </div>
                            <div className="flex flex-col gap-[1.6rem]">
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">
                                        Change colors, symbols, sizing, and more with Looka’s easy-to-use editor
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="warpper-item max-w-[35.8rem]">
                        <div className="item ">
                            <div className="w-[7.2rem] h-[7.2rem]">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162409/ic_shirt.svg"
                                    alt=""
                                />
                            </div>
                            <div className="title text-[1.8rem] mt-[3rem] font-bold leading-[2.3rem] my-[2.4rem]">
                                1. Logo designs
                            </div>
                            <div className="flex flex-col gap-[1.6rem]">
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">
                                        Change colors, symbols, sizing, and more with Looka’s easy-to-use editor
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="warpper-item max-w-[35.8rem]">
                        <div className="item ">
                            <div className="w-[7.2rem] h-[7.2rem]">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162409/ic_shirt.svg"
                                    alt=""
                                />
                            </div>
                            <div className="title text-[1.8rem] mt-[3rem] font-bold leading-[2.3rem] my-[2.4rem]">
                                1. Logo designs
                            </div>
                            <div className="flex flex-col gap-[1.6rem]">
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">
                                        Change colors, symbols, sizing, and more with Looka’s easy-to-use editor
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col w-full flex flex-wrap items-center justify-between gap-[1.6rem] px-[3.2rem]">
                    <div className="warpper-item max-w-[35.8rem]">
                        <div className="item ">
                            <div className="w-[7.2rem] h-[7.2rem]">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162409/ic_shirt.svg"
                                    alt=""
                                />
                            </div>
                            <div className="title text-[1.8rem] mt-[3rem] font-bold leading-[2.3rem] my-[2.4rem]">
                                1. Logo designs
                            </div>
                            <div className="flex flex-col gap-[1.6rem]">
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">
                                        Change colors, symbols, sizing, and more with Looka’s easy-to-use editor
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="warpper-item max-w-[35.8rem]">
                        <div className="item ">
                            <div className="w-[7.2rem] h-[7.2rem]">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162409/ic_shirt.svg"
                                    alt=""
                                />
                            </div>
                            <div className="title text-[1.8rem] mt-[3rem] font-bold leading-[2.3rem] my-[2.4rem]">
                                1. Logo designs
                            </div>
                            <div className="flex flex-col gap-[1.6rem]">
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">
                                        Change colors, symbols, sizing, and more with Looka’s easy-to-use editor
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="warpper-item max-w-[35.8rem]">
                        <div className="item ">
                            <div className="w-[7.2rem] h-[7.2rem]">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://cdn.logojoy.com/wp-content/uploads/2018/12/14162409/ic_shirt.svg"
                                    alt=""
                                />
                            </div>
                            <div className="title text-[1.8rem] mt-[3rem] font-bold leading-[2.3rem] my-[2.4rem]">
                                1. Logo designs
                            </div>
                            <div className="flex flex-col gap-[1.6rem]">
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">
                                        Change colors, symbols, sizing, and more with Looka’s easy-to-use editor
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem]">
                                    {/* checkIcon */}
                                    <img
                                        src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                        alt=""
                                        className=""
                                    />
                                    <div className="text">Instantly generate 100s of custom logo mockups</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
