import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
    mutation myMutation($post_id: ID!, $username: String!, $text: String!){
        insertComment(post_id: $post_id, text: $text, username: $username){
            id
            text
            created_at
            post_id
            username
        }
    }
    
`

export const ADD_POST = gql`
    mutation myMutation(
    $image: String!
    $body: String!
    $subreddit_id: ID!
    $title: String!
    $username: String!
    ){
    insertPost(
    image: $image
    body: $body
    subreddit_id:$subreddit_id
    title: $title
    username: $username
    ){
    body
    created_at
    id
    image
    subreddit_id
    title
    username
        }
    }
`

export const ADD_SUBREDDIT = gql`
    mutation myMutation($topic: String!){
        insertSubreddit(topic: $topic){
            id
            topic
            created_at
        }
    }


`