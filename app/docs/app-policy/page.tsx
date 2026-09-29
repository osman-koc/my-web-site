import AppPolicyPage_English from "./en";
import AppPolicyPage_Turkish from "./tr";
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default async function AppPolicyPage({
    searchParams,
}: {
    searchParams: Promise<{ lang?: string }>;
}) {
    const { lang } = await searchParams;
    return lang === 'tr' ? <AppPolicyPage_Turkish /> : <AppPolicyPage_English />;
}
