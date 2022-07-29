import teamPhoto from '../../images/home/people.jpg';
import teamPhoto2x from '../../images/home/people@2x.jpg';
import teamPhotoWebp from '../../images/home/people.webp';
import teamPhotoWebp2x from '../../images/home/people@2x.webp';

export function About() {
    return (
        <div>
            <Container>
                <section>
                    <picture>
                        {/* <source srcSet=${}> */}
                    </picture>

                    <div>
                        <h2>What you are looking for</h2>
                        <p>We provide bespoke solutions</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                        <button>Read More</button>
                    </div>
                </section>
            </Container>
        </div>
    );
}