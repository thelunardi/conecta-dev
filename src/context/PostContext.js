import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

export const PostContext = createContext()

export function PostProvider({ children }) {
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [markdownText, setMarkdownText] = useState('')

    const handleTitle = (event) => {
        setTitle(event.currentTarget.value)
    }

    const handleTags = (event, values) => {
        setTags(values)
    }

    const handleMarkdown = (event) => {
        setMarkdownText(event.currentTarget.value)
    }

    return <PostContext.Provider
        value={ {
            image,
            setImage,
            title,
            setTitle: handleTitle,
            tags,
            setTags: handleTags,
            markdownText,
            setMarkdownText: handleMarkdown
        } }
    >
        { children }
    </PostContext.Provider>
}

PostProvider.defaultProps = {
    children: {}
}

PostProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export function usePost() {
    const ctx = useContext(PostContext)
    const { image, setImage, title, setTitle, tags, setTags, markdownText, setMarkdownText } = ctx

    return {
        image,
        setImage,
        title,
        setTitle,
        tags,
        setTags,
        markdownText,
        setMarkdownText,
    }
}