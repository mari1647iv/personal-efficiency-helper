import React, { useContext } from "react";
import "./NewPlaylistForm.css"
import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/Button/Button";
import { FocusContext } from '../FocusContext';
import { useForm } from "react-hook-form";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Input/Input";
import playlistService from "../../../services/playlistService";
import { PlaylistDataInterface } from "../../../types/types";

function NewPlaylistForm() {
  const defaultValues = { name: '', duration: '00 : 00 : 00', url: '' }
  const methods = useForm({ defaultValues })
  const { togglePlaylistForm, setPlaylists } = useContext(FocusContext)!

  async function onSubmit(playlistData: PlaylistDataInterface) {
    let res = await playlistService.addPlaylist(playlistData)
    console.log(res)
    setPlaylists(res)
    togglePlaylistForm()
  }

  function onCancel() {
    togglePlaylistForm()
  }

  return (
    <Modal>
      <h3>Add new playlist</h3>
      <Form onSubmit={onSubmit} methods={methods}>
        <p>Fill the form to add your playlist in the list</p>
        <Input name="name" type="text" control={methods.control} rules={{ required: { message: 'Name is required!', value: true } }} />
        <Input name="duration" type="text" control={methods.control} rules={{ required: { message: 'Duration is required!', value: true } }} />
        <Input name="url" type="string" control={methods.control} rules={{ required: { message: 'URL address is required!', value: true } }} />
        <Button onClick={onCancel}>CANCEL</Button>
        <Button type="submit">ADD</Button>
      </Form>
    </Modal>
  )
}

export default NewPlaylistForm;