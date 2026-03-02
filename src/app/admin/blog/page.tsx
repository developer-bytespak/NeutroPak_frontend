import AdminLayout from '@/components/AdminLayout';

export const metadata = {
  title: 'Blog - Admin | NeutroPak',
  description: 'Manage blog posts',
};

export default function AdminBlog() {
  return (
    <AdminLayout>
        <main className="admin-blog">
          <div className="page-header">
            <h1>Blog Posts</h1>
            <button className="btn btn-primary">New Post</button>
          </div>

          <div className="blog-posts-table">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Published</th>
                  <th>Views</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Blog posts will be listed here */}
                <tr>
                  <td>Getting Started with NeutroPak</td>
                  <td>Admin</td>
                  <td><span className="badge success">Published</span></td>
                  <td>Mar 1, 2025</td>
                  <td>234</td>
                  <td>
                    <button className="link">Edit</button>
                    <button className="link delete">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
    </AdminLayout>
  );
}
