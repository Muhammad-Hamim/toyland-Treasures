import React from 'react';
import useTitle from '../../../hooks/useTitle.js'
const Blog = () => {
  useTitle('Blogs');
  return (
    <div>
      <div className="grid border border-gray-200 rounded-lg shadow-sm md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h3>
            <p className="my-4">
              <p>
                An access token is a credential that provides authorization to access protected resources in an application. It is typically obtained after a user successfully logs in and is used to authenticate subsequent requests. Access tokens are short-lived and have an expiration time to enhance security.
              </p>

              <p>
                On the other hand, a refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It allows users to maintain their session without having to log in again. Refresh tokens are securely stored on the client-side, usually in an HTTP-only cookie, to prevent unauthorized access.
              </p>

              <p>
                It is essential to store access tokens securely on the client-side to mitigate potential security risks. Storing them in an HTTP-only cookie helps protect against cross-site scripting (XSS) attacks, as the token cannot be accessed by JavaScript. Refresh tokens, being long-lived and more sensitive, should be stored securely in a server-side database or session store.
              </p>

              <p>
                By implementing appropriate token expiration policies, refreshing access tokens when needed, and securely storing them, we can ensure the security and integrity of client-side authentication in our applications.
              </p>
            </p>
          </blockquote>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Compare SQL and NoSQL databases?
            </h3>
            <p className="my-4">
              <p>
                SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different types of database management systems.
              </p>

              <p>
                SQL databases, also known as relational databases, store data in tables with predefined schemas. They use SQL for defining and manipulating the data. SQL databases are highly suitable for structured data and complex relationships. They ensure data integrity and support ACID (Atomicity, Consistency, Isolation, Durability) properties. Some popular SQL databases include MySQL, PostgreSQL, and Oracle.
              </p>

              <p>
                On the other hand, NoSQL databases store data in various formats, such as key-value pairs, documents, columnar, or graph-based structures. They offer flexible schemas and horizontal scalability. NoSQL databases are well-suited for handling unstructured or semi-structured data, high read/write workloads, and distributed environments. They provide eventual consistency and are highly scalable. Some popular NoSQL databases include MongoDB, Cassandra, and Redis.
              </p>

              <p>
                The choice between SQL and NoSQL databases depends on the specific requirements of the application. SQL databases are often preferred for complex relationships and structured data, while NoSQL databases excel in handling large volumes of unstructured data and scalable applications.
              </p>
            </p>
          </blockquote>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              What is Express.js? What is Nest.js?
            </h3>
            <p className="my-4">
              <p>
                Express.js is a popular web application framework for Node.js. It provides a robust set of features and utilities for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and template rendering. It follows a minimalist approach, allowing developers to have more control over the application's architecture and components.
              </p>

              <p>
                Nest.js, on the other hand, is a progressive Node.js framework for building efficient and scalable server-side applications. It is built on top of Express.js and utilizes TypeScript as its primary language. Nest.js provides a modular and extensible architecture, allowing developers to organize their code into modules, controllers, and services. It integrates well with other libraries and frameworks and promotes best practices for building maintainable and testable applications.
              </p>

              <p>
                Both Express.js and Nest.js are widely used in the Node.js ecosystem and have vibrant communities. The choice between the two depends on the specific project requirements, developer preferences, and the need for additional features provided by Nest.js, such as dependency injection and module organization.
              </p>
            </p>
          </blockquote>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center border-gray-200 rounded-b-lg md:rounded-br-lg">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              What is MongoDB aggregate and how does it work?
            </h3>
            <p className="my-4">
              <p>
                MongoDB's aggregate is a powerful framework for performing advanced data processing and analysis in the MongoDB database. It allows you to perform complex queries, transformations, aggregations, and computations on the data stored in MongoDB collections.
              </p>

              <p>
                The aggregate framework works by providing a pipeline of stages that operate on the input documents sequentially. Each stage takes the input from the previous stage, processes it, and passes the output to the next stage. The pipeline stages can include operations like filtering, grouping, projecting, sorting, and aggregating.
              </p>

              <p>
                The aggregate pipeline stages are flexible and can be combined in various ways to achieve the desired data processing and analysis. Some common pipeline stages include `$match` to filter documents based on specific criteria, `$group` to group documents by a field and perform aggregations, `$project` to reshape the output documents, and `$sort` to sort the resulting documents.
              </p>

              <p>
                By leveraging the aggregate framework, you can perform complex data manipulations and computations within the database itself, reducing the need for multiple round-trips to the application. This improves performance and allows you to leverage the scalability and flexibility of MongoDB for advanced data analysis tasks.
              </p>
            </p>
          </blockquote>
        </figure>
      </div>
    </div>
  );
};

export default Blog;
