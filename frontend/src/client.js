import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const id = process.env.REACT_APP_SANITY_PROJECT_ID;
const tok = process.env.REACT_APP_SANITY_PROJECT_TOKEN

export const client = createClient({
    projectId: id,
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
    token: tok,
});

const builder = imageUrlBuilder(client)

export const urlFor = (source)=> builder.image(source)