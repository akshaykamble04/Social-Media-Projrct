import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

    const stories = [
        {
            id: 1,
            name: "ak",
            img: "data:image/webp;base64,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",
        },
        {
            id: 2,
            name: "ak",
            img: "data:image/webp;base64,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",
        },
        {
            id: 3,
            name: "ak",
            img: "data:image/webp;base64,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",
        },
        {
            id: 4,
            name: "ak",
            img: "data:image/webp;base64,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",
        },
        {
            id: 5,
            name: "ak",
            img: "data:image/webp;base64,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",
        },
        // {
        //     id: 6,
        //     name: "ak",
        //     img: "data:image/webp;base64,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",
        // },
        // {
        //     id: 7,
        //     name: "ak",
        //     img: "data:image/webp;base64,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",
        // },
        // {
        //     id: 8,
        //     name: "ak",
        //     img: "data:image/webp;base64,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",
        // },
        // {
        //     id: 9,
        //     name: "ak",
        //     img: "data:image/webp;base64,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",
        // },
        // {
        //     id: 10,
        //     name: "ak",
        //     img: "data:image/webp;base64,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",
        // },

    ];


    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>

                </div>

            ))}
        </div>
    )
}

export default Stories