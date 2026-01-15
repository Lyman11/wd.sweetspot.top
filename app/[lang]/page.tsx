import { getDictionary } from "../get-dictionary";
import { Locale } from "../get-dictionary";
import HomeClient from "./HomeClient";

export async function generateStaticParams() {
    return [{ lang: 'ja' }, { lang: 'en' }, { lang: 'zh' }]
}

// 强制静态生成以优化字体预加载
export const dynamic = 'force-static';
export const revalidate = false;

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(lang);

    return <HomeClient dictionary={dictionary} lang={lang} />;
}
