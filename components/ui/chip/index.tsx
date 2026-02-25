import Link from "next/link";

export default function Chip({name}: { name: string }) {
    return (
        <Link href="" className="px-3 border border-nordicink bg-huskyfur rounded-full">{ name }</Link>
    );
}