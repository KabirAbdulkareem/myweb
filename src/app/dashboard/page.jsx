"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
/*   const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      })

      if(!data.ok){
        setErr(true)
        return notFound()
      }

      const posts = await data.json()
      setData(posts)
      setIsLoading(false)
      console.log(posts)
      return posts;
    }
    getData();
  },[]); */
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  console.log(data)
  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
