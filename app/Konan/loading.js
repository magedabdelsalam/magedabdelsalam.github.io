import Skeleton from "components/Skeleton/Skeleton";

export default function Loading() {
    // Or a custom loading skeleton component
    return <article>
        <section>
            <Skeleton h4/>
            <Skeleton img/>
            <Skeleton h1/>
            <Skeleton p/>
        </section>
        <section>
            <Skeleton h2/>
            <Skeleton p/>
            <Skeleton p/>
        </section>
    </article>
  }