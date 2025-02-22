import { Button, Modal, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useSelector } from "react-redux";


export default function DashboardComments() {
  const { currentUser } = useSelector((state) => state.user);
  const [showMore, setShowMore] = useState(true);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState("");
  

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch('/api/comment/getcomments');
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          if (data.comments.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchComments();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getcomments?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments]);
        if (data.comments.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteComment = async () => {
    setShowModal(false);
    try {
        const res = await fetch(`/api/comment/deleteComment/${commentIdToDelete}`, {
            method: "DELETE",
        })
        const data = await res.json();
        if(res.ok){
            setComments((prev) => prev.filter((comment) => comment._id !== commentIdToDelete));
            setShowModal(false);
        } else {
            console.log(data.message);
        }
    } catch (error) {
        console.log(error.message);
    }
  }

  

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && comments.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell className="text-gray-900 dark:text-white">
                Date updated
              </Table.HeadCell>
              <Table.HeadCell className="text-gray-900 dark:text-white">
                Comment Content
              </Table.HeadCell>
              <Table.HeadCell className="text-gray-900 dark:text-white">
                Number of likes
              </Table.HeadCell>
              <Table.HeadCell className="text-gray-900 dark:text-white">
                PostId
              </Table.HeadCell>
              <Table.HeadCell className="text-gray-900 dark:text-white">
                UserId
              </Table.HeadCell>
              <Table.HeadCell className="text-gray-900 dark:text-white">
                Delete
              </Table.HeadCell>             
            </Table.Head>
            {comments.map((comment) => (
              <Table.Body key={comment._id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="text-gray-900 dark:text-white">
                    {new Date(comment.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    {comment.content}                    
                  </Table.Cell>
                  <Table.Cell>                    
                    {comment.numberOfLikes}                    
                  </Table.Cell>
                  <Table.Cell className="text-gray-900 dark:text-white">
                    {comment.postId}
                  </Table.Cell>
                  <Table.Cell className="text-gray-900 dark:text-white">
                    {comment.userId}
                  </Table.Cell>
                  <Table.Cell>
                    <span onClick={() => {
                      setShowModal(true);
                      setCommentIdToDelete(comment._id);
                    }} className="font-medium text-red-500 hover:underline cursor-pointer">
                      Delete
                    </span>
                  </Table.Cell>
                  
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>There are no comments yet!</p>
      )}
      <Modal
              show={showModal}
              onClose={() => setShowModal(false)}
              popup
              size="md"
            >
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
                  <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this comment?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={handleDeleteComment}>
                      Yes, I&apos;m sure
                    </Button>
                    <Button onClick={() => setShowModal(false)}>No, cancel</Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
    </div>
  );
}
