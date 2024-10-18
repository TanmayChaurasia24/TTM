import { FloatingDockDemo } from "../components/MenuBarHome";
import { BackgroundGradientDemo } from "../components/BlogPost";
import kafka from "../assets/chris-ried-ieic5Tq8YMk-unsplash.jpg";
import img2 from "../assets/hackernoon-SWDxRmJ5wvA-unsplash.jpg"
import img3 from "../assets/miguel-angel-hernandez-cObuSxlcUac-unsplash.jpg"
import img4 from "../assets/nikolai-lehmann-HBtnUG64BZE-unsplash.jpg"
import img5 from "../assets/thought-catalog-9aOswReDKPo-unsplash.jpg"


const Allpost = () => {
  return (
    <div className="bg-neutral-900 min-h-screen p-8 flex flex-col items-center">
        <div className="p-5 flex justify-center items-center w-full h-9 gap-x-4">
            <input type="text" className="w-[40%] rounded-md p-2 bg-neutral-200"/>
            <button className="text-white">Search</button>
        </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center overflow-auto h-full pb-20">
        <BackgroundGradientDemo
          title="Deep diving into Kafka"
          content="Apache Kafka is an open-source distributed event streaming platform designed for high-throughput, real-time data processing. It allows applications to publish, subscribe to, store, and process data streams in a fault-tolerant and scalable way. Kafka is widely used for building data pipelines, streaming analytics, and integrating real-time systems, supporting millions of messages per second with low latency."
          source={kafka}
          Author="Tanmay Kumar"
        />
        <BackgroundGradientDemo
          title="Deep diving into Kafka"
          content="Apache Kafka is an open-source distributed event streaming platform designed for high-throughput, real-time data processing. It allows applications to publish, subscribe to, store, and process data streams in a fault-tolerant and scalable way. Kafka is widely used for building data pipelines, streaming analytics, and integrating real-time systems, supporting millions of messages per second with low latency."
          source={img2}
          Author="Tanmay Kumar"
        />
        <BackgroundGradientDemo
          title="Deep diving into Kafka"
          content="Apache Kafka is an open-source distributed event streaming platform designed for high-throughput, real-time data processing. It allows applications to publish, subscribe to, store, and process data streams in a fault-tolerant and scalable way. Kafka is widely used for building data pipelines, streaming analytics, and integrating real-time systems, supporting millions of messages per second with low latency."
          source={img3}
          Author="Tanmay Kumar"
        />
        <BackgroundGradientDemo
          title="Deep diving into Kafka"
          content="Apache Kafka is an open-source distributed event streaming platform designed for high-throughput, real-time data processing. It allows applications to publish, subscribe to, store, and process data streams in a fault-tolerant and scalable way. Kafka is widely used for building data pipelines, streaming analytics, and integrating real-time systems, supporting millions of messages per second with low latency."
          source={img4}
          Author="Tanmay Kumar"
        />
        <BackgroundGradientDemo
          title="Deep diving into Kafka"
          content="Apache Kafka is an open-source distributed event streaming platform designed for high-throughput, real-time data processing. It allows applications to publish, subscribe to, store, and process data streams in a fault-tolerant and scalable way. Kafka is widely used for building data pipelines, streaming analytics, and integrating real-time systems, supporting millions of messages per second with low latency."
          source={img5}
          Author="Tanmay Kumar"
        />
        <BackgroundGradientDemo
          title="Deep diving into Kafka"
          content="Apache Kafka is an open-source distributed event streaming platform designed for high-throughput, real-time data processing. It allows applications to publish, subscribe to, store, and process data streams in a fault-tolerant and scalable way. Kafka is widely used for building data pipelines, streaming analytics, and integrating real-time systems, supporting millions of messages per second with low latency."
          source={kafka}
          Author="Tanmay Kumar"
        />
      </div>

      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <FloatingDockDemo />
      </div>
    </div>
  );
};

export default Allpost;
