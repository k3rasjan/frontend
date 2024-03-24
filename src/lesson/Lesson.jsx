import { LessonBlock } from "/src/creator/Block.jsx";
import { MenuElelement } from "./Menu";

export default function Lesson(lessonContent) {
    let menuList = ["Introduction", "Ingredients", "Tools", "Steps", "Tips"];
    let lesson = lessonContent.lesson;
    let blocks = lessonContent.blocks;
    console.log(lesson);
    console.log(blocks);
    let title = "Scrambled eggs";
    let tags = ["cooking", "breakfast", "eggs"];
    let author = "John Doe";
    let rating = 7;
    let description =
        "Teaching students how to make scrambled eggs can be a fun and practical cooking lesson. Here's a simple step-by-step guide you can follow: ";
    return (
        <div>
            <div>
                <div className="lessonPreview inLesson">
                    <div className="color"></div>
                    <div className="lessonPreview-2">
                        <div className="first-line">
                            <div className="tags">
                                <p>Tags</p>
                                <div className="tags-2">
                                    {tags.map((tag) => {
                                        return <p key={tag}>{tag}</p>;
                                    })}
                                </div>
                            </div>
                            <div className="author">
                                <p>Author</p>
                                <p>{author}</p>
                            </div>
                            <div className="rating">
                                <p>Rating</p>
                                <p
                                    style={{
                                        backgroundColor:
                                            rating == 7
                                                ? "#6ae86a"
                                                : rating == 12
                                                ? "#ffff5d"
                                                : "#FECACA",
                                    }}
                                >
                                    {rating}+
                                </p>
                            </div>
                        </div>
                        <div className="second-line">
                            <h1>{title}</h1>
                        </div>
                        <div className="third-line">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-neutral-900 flex w-screen min-h-screen">
                <div className="bg-neutral-900 w-[15vw]">
                    <h2 className="text-sky-200">Scrambled eggs</h2>
                    {menuList.map((item, index) => {
                        return <MenuElelement key={index} subtitle={item} />;
                    })}
                </div>
                <div className="bg-neutral-950 w-screen rounded-tl-3xl">
                    <LessonBlock
                        subtitle="Introduce Ingredients and Tools:"
                        text="Show your students the ingredients and tools needed for making scrambled eggs. This typically includes eggs, butter or oil, salt, pepper, a mixing bowl, a whisk or fork, and a frying pan. "
                    />
                    <LessonBlock
                        subtitle="Crack Eggs:"
                        text="Demonstrate how to crack eggs properly, emphasizing the importance of cracking them on a flat surface to avoid shell fragments. "
                    />
                    <LessonBlock
                        subtitle="Whisk Eggs:"
                        text="Instruct students to crack the eggs into a mixing bowl and whisk them until the yolks and whites are well combined. This can be done using a whisk or a fork. "
                    />
                    <LessonBlock
                        subtitle="Season Eggs:"
                        text="Add a pinch of salt and pepper to the whisked eggs and mix well to evenly distribute the seasoning. "
                    />
                    <LessonBlock
                        subtitle="Heat Pan:"
                        text="Place a frying pan on the stove over medium heat. Add a small amount of butter or oil to the pan and allow it to melt or heat up. "
                    />
                    <LessonBlock
                        subtitle="Cook Eggs:"
                        text="Pour the whisked eggs into the heated pan. Let them cook undisturbed for a few seconds until the edges start to set."
                    />
                    <LessonBlock
                        subtitle="Scramble Eggs:"
                        text="Using a spatula, gently push the cooked edges of the eggs towards the center of the pan, allowing the uncooked eggs to flow to the edges. 
                        Continue doing this until the eggs are mostly cooked but still slightly runny. "
                    />
                    <LessonBlock
                        subtitle="Finish Cooking:"
                        text="Remove the pan from the heat and let the residual heat finish cooking the eggs to your desired consistency. Be careful not to overcook them, as they can become dry. "
                    />
                    <LessonBlock
                        subtitle="Serve:"
                        text="Transfer the scrambled eggs to a plate and serve them immediately. You can garnish them with fresh herbs, cheese, or other toppings if desired. "
                    />
                    <LessonBlock
                        subtitle="Clean Up:"
                        text="Remind students to clean up their work area and wash any utensils or dishes used in the cooking process. "
                    />
                    <LessonBlock subtitle="Throughout the lesson, encourage your students to ask questions and offer guidance as needed. Cooking is a valuable life skill, and learning how to make scrambled eggs is a great starting point for building confidence in the kitchen. " />
                </div>
            </section>
        </div>
    );
}
