import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DashboardPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  console.log(userPosts)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json()
        if(res.ok){
          setUserPosts(data.posts)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    if(currentUser.isAdmin){
      fetchPosts();
    }
  }, [currentUser._id]);

  return (
    <div>
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <>
        <Table hoverable className="shadow-md"></Table>
        </>
      ):(
        <p>You have no posts yet!</p>
      ) }
    </div>
  )
}
