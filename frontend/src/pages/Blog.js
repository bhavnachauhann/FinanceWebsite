import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './pagesfinance.css';

const Blog = () => {
  // Array of blog post data
  const blogPosts = [
    {
      id: 1,
      imgSrc: "images/img-1.jpg",
      date: "Jan 20, 2021",
      title: "Behind the word mountains",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "/blogsubpage",
    },
    {
      id: 2,
      imgSrc: "images/img-2.jpg",
      date: "Jan 20, 2021",
      title: "Behind the word mountains",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "/blogsubpage",
    },
    {
      id: 3,
      imgSrc: "images/img-3.jpg",
      date: "Jan 20, 2021",
      title: "Behind the word mountains",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "/blogsubpage",
    },
    {
      id: 4,
      imgSrc: "images/img-4.jpg",
      date: "Jan 20, 2021",
      title: "Behind the word mountains",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "/blogsubpage",
    },
    {
      id: 5,
      imgSrc: "images/img-1.jpg",
      date: "Jan 20, 2021",
      title: "Behind the word mountains",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "/blogsubpage",
    },
    {
      id: 6,
      imgSrc: "images/img-2.jpg",
      date: "Jan 20, 2021",
      title: "Behind the word mountains",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "/blogsubpage",
    },
    // Add more posts as needed
  ];

  return (
    <>
     <div class="hero overlay blogsec  p-5">
		
		<div class="container">
        <p data-aos="fade-up" class="meta aos-init aos-animate textwhite">by <a href="#" className='textwhite'>Admin</a> • on <a href="#" className='textwhite'>Apr 4th, 2022</a> </p>
        <h1 class="heading text-white mb-3 aos-init aos-animate textbold" data-aos="fade-up" data-aos-delay="100">US dollar at risk of losing dominance</h1>
		</div>
	</div>

      <div className="row mx-5 my-5">
        {blogPosts.map((post, index) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card post-entry">
              <a href={post.link}>
                <img src={post.imgSrc} className="card-img-top" alt="Blog Post" />
              </a>
              <div className="card-body">
                <div>
                  <span className="text-uppercase font-weight-bold date">{post.date}</span>
                </div>
                <h5 className="card-title">
                  <a href={post.link}>{post.title}</a>
                </h5>
                <p>{post.description}</p>
                <p className="mt-5 mb-0">
                  <a href={post.link}>Read more</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
