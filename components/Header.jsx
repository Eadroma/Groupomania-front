import Head from "next/head"
export const HeaderModule = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="icon" href="https://res.cloudinary.com/datxh7pfw/image/upload/v1647293678/Groupomania/icon_npm0td.png" />
        </Head>
    )
}