
interface bannerData {
    url: string,
    pic: string,
    des?: string
}
interface bannerTem {
    template: string,
    data: bannerData
}

export type pageType = Array<bannerTem>;