'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import '@styles/app.css'
import TableComponent from '../components/common/table'
import useSWR from 'swr'



export default function Home() {
  const fetcher = (url:string) => fetch(url)
  .then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  console.log(data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('http://localhost:8000/blogs');
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <main className={styles.main}>
      <TableComponent blogs={data ?? []}/>
    </main>
  )
}
