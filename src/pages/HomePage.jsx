/** @jsx createVNode */
import { createVNode } from "../lib";
import { Header } from '../components/templates/Header.jsx';
import { Navigation } from '../components/Navigation.jsx';
import { Footer } from '../components/templates/Footer.jsx';
import { PostForm } from '../components/PostForm.jsx';
import { Post } from '../components/Post.jsx';
import { globalStore } from '../store';

export const HomePage = () => {
    const { loggedIn, posts } = globalStore.getState();

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center">
            <div className="max-w-md w-full">
                <Header />
                <Navigation loggedIn={loggedIn} />

                <main className="p-4">
                    {loggedIn && <PostForm />}
                    <div id="posts-container" className="space-y-4">
                        {posts.map(post => (
                            <Post key={post.id} {...post} />
                        ))}
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};
