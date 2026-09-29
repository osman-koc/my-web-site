import AppPolicyPage_English from "./en";
import AppPolicyPage_Turkish from "./tr";

export default async function AppPolicyPage({
    searchParams,
}: {
    searchParams: Promise<{ lang?: string }>;
}) {
    const { lang } = await searchParams;
    return lang === 'tr' ? <AppPolicyPage_Turkish /> : <AppPolicyPage_English />;
}
