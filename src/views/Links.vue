<template>
  <table>
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Link / Resource</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 50" :key="i">
        <td>
          <input type="text" placeholder="Enter student name" />
        </td>
        <td>
          <input type="url" placeholder="https://example.com" />
        </td>
      </tr>
    </tbody>
  </table>
</template>