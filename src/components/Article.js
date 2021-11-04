import React from "react";

function emojiHandler(minutes) {
    // const time = minutes < 30 ? 5 : 10;
    // const emoji = minutes < 30 ? "☕️" : "🍱";

    const [time, emoji] = minutes < 30 ? [5, "☕️"] : [10, "🍱"];

    let emojis = "";
    for (let i = 0; i < minutes; i += time) {
      emojis += emoji;
    }

    return emojis;
}

function Article({title, date= "January 1, 1970", preview, minutes}){
    const emoji = emojiHandler(minutes);
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} • {emoji} {minutes}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;